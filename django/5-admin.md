# Admin

## Create superuser

```sh
python manage.py createsuperuser
```

## Register model in admin

```py [app_name/admin.py]
from django.contrib import admin
from .models import Movie

admin.site.register(Movie)
```

## Admin interface

- You can now access the admin interface at `http://localhost:8000/admin`
- Use the superuser credentials to log in

## Describe model

```py [app_name/models.py]
class Movie(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField()
    is_released = models.BooleanField(default=True)

    # String representation of the model
    def __str__(self):
        return self.title
```
