# Deploy

1. Make sure the virtual env is activated

```sh
source env/Scripts/activate
```

2. Update allowed hosts

```py [config/settings.py]
# Not recommended for production
ALLOWED_HOSTS = ['*']
```

3. install gunicorn

```sh
pip install gunicorn
```

gunicorn is used to run the django application

4. freeze requirements

```sh
pip freeze > requirements.txt
```

5. Install whitenoise to let the server know where to find static files

```sh
pip install whitenoise
```

6. Update settings.py

```py [config/settings.py]
MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware", # [!code ++]
    "django.contrib.sessions.middleware.SessionMiddleware",
    # ... other middleware
]

STATIC_URL = 'static/'
STATIC_ROOT = 'staticfiles' # [!code ++]
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage' # [!code ++]
```

1. Create a bash file

```sh [build.sh]
#!/usr/bin/env bash
# exit on error
set -o errexit
# Install dependencies
pip install -r requirements.txt
# Collect static files
python manage.py collectstatic --no-input
# Migrate database
python manage.py migrate
```
