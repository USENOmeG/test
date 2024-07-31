from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# news_genres = ['bla']

# Genres selections for rad cards

CASE_STUDY = 'CASE'
NEWS = 'NEWS'

rad_genres = [(CASE_STUDY, 'CASE STUDY'), (NEWS, 'NEWS')]


class CustomUserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, first_name=first_name,
                          last_name=last_name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, first_name, last_name, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def __str__(self):
        return self.email


class rad_content(models.Model):
    """
    Here is the place admin can change the rad card contents.
    Perhaps, I had to change settings.py static file location.

    """

    rad_id = models.AutoField(primary_key=True)
    genres = models.CharField(max_length=150, choices=rad_genres, default=None)
    header_main = models.CharField(max_length=50, blank=False)
    author = models.CharField(max_length=20, blank=False)
    description = models.CharField(max_length=50, blank=True)
    paragraph1 = models.CharField(max_length=1000, blank=False)
    paragraph2 = models.CharField(max_length=1000, blank=True)
    paragraph3 = models.CharField(max_length=1000, blank=True)
    paragraph4 = models.CharField(max_length=1000, blank=True)
    # this image is for the index.html's rad card background
    # Seems like with this settings, it does not work without image.
    thumbnail_image = models.ImageField(
        null=True, blank=True, upload_to='images/radCard_image/')
    # At least, one image would be
    image1 = models.ImageField(
        null=True, blank=True, upload_to='images/radCard_image/')
    image2 = models.ImageField(
        null=True, blank=True, upload_to='images/radCard_image/')
    image3 = models.ImageField(
        null=True, blank=True, upload_to='images/radCard_image/')
    image4 = models.ImageField(
        null=True, blank=True, upload_to='images/radCard_image/')
    # To create logs
    time_stamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.header_main


# class sorts_for_cases():
#     """
#     allowing user to sort genres for the case studies.
#     It might be able to work on JS.
#     """

#     year_sort = ['all', '2024', '2023', '2022']
