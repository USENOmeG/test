from django.db import models

# Create your models here.

# news_genres = ['bla']


# class rad_content(models.Model):
#     """Perhaps, I had to change settings.py static file location"""

#     CASE_STUDY = 'CASE'
#     NEWS = 'NEWS'

#     rad_genres = [(CASE_STUDY, 'CASE STUDY'), (NEWS, 'NEWS')]

#     genres = models.models.CharField(choices=rad_genres, default=None)
#     rad_header_main = models.CharField(max_length=20, required=True)
#     rad_header_sub = models.CharField(max_length=50, required=True)
#     rad_author = models.CharField(max_length=20, required=True)
#     rad_paragraph1 = models.CharField(max_length=1000, required=True)
#     rad_paragraph2 = models.CharField(max_length=1000)
#     rad_paragraph3 = models.CharField(max_length=1000)
#     rad_paragraph4 = models.CharField(max_length=1000)
#     rad_background_image = models.ImageField(null=True, blank=True)
#     rad_image1 = models.ImageField(null=True, blank=True)
#     rad_image2 = models.ImageField(null=True, blank=True)
#     rad_image3 = models.ImageField(null=True, blank=True)
#     rad_image4 = models.ImageField(null=True, blank=True)
#     time_stamp = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.name


# class news_content(models.Model):
#     news_genres = models.select()
#     news_header = models.CharField(max_length=20, required=True)
#     news_header_sub = models.CharField(max_length=50, required=True)
#     news_content = models.CharField(max_length=50, required=True)
#     news_image1 = models.ImageField(null=True, blank=True)
#     news_image2 = models.ImageField(null=True, blank=True)
#     news_image3 = models.ImageField(null=True, blank=True)
#     news_date = models.models.DateField(
#         _(""), auto_now=False, auto_now_add=False)
#     news_paragraph1 = models.TextField(max_length=1000)
#     news_paragraph2 = models.TextField(max_length=1000)
