#!/usr/local/bin/dumb-init /bin/bash

# Load the .env file into the environment.
if [ "$ENV" == 'staging' ]; then
    # shellcheck disable=SC2046
    export $(grep -v '^#' app/app/.env | xargs)
fi

# Settings
# Web
WEB_WORKER=${WEB_WORKER_TYPE:-runserver_plus}

# General / Overrides
FORCE_PROVISION=${FORCE_PROVISION:-'off'}
FORCE_GET_PRICES=${FORCE_GET_PRICES:-'off'}

cd app || exit 1
# Check whether or not the .env file exists. If not, create it.
if [ ! -f app/.env ]; then
    cp app/local.env app/.env
fi

# Enable Python dependency installation on container start/restart.
if  [ ! -z "${INSTALL_REQS}" ]; then
    echo "Installing Python packages..."
    pip3 install -r ../requirements/test.txt
    echo "Python package installation completed!"
fi

WEB_OPTS="${WEB_WORKER} ${WEB_INTERFACE:-0.0.0.0}:${WEB_PORT:-8000}"

if [ "$VSCODE_DEBUGGER_ENABLED" = "on" ]; then
    pip install ptvsd
    WEB_OPTS="${WEB_OPTS} --nothreading"
    echo "VSCode remote debugger enabled! This has disabled threading!"
fi

if [ "$WEB_WORKER" = "runserver_plus" ]; then
    WEB_OPTS="${WEB_OPTS} --extra-file /code/app/app/.env --nopin"
fi

# Provision the Django test environment.
if [ ! -f /provisioned ] || [ "$FORCE_PROVISION" = "on" ]; then
    echo "First run - Provisioning the local development environment..."
    if [ "$DISABLE_INITIAL_CACHETABLE" != "on" ]; then
        python manage.py createcachetable
    fi

    if [ "$DISABLE_INITIAL_COLLECTSTATIC" != "on" ]; then
        python manage.py collectstatic --noinput -i other &
    fi

    if [ "$DISABLE_INITIAL_MIGRATE" != "on" ]; then
        python manage.py migrate
    fi

    if [ "$DISABLE_INITIAL_LOADDATA" != "on" ]; then
        python manage.py loaddata initial
    fi
    date >> /provisioned
    echo "Provisioning completed!"
fi

if [ "$FORCE_GET_PRICES" = "on" ]; then
    python manage.py get_prices
fi

exec python manage.py $WEB_OPTS
