from django.db import models

# news_genres = ['bla']

# Genres selections for rad cards

CASE_STUDY = 'CASE'
NEWS = 'NEWS'

rad_genres = [(CASE_STUDY, 'CASE STUDY'), (NEWS, 'NEWS')]


# class rad_content(models.Model):
#     """
#     Here is the place admin can change the rad card contents.
#     Perhaps, I had to change settings.py static file location.

#     """

#     genres = models.models.CharField(choices=rad_genres, default=None)
#     header_main = models.CharField(max_length=20, required=True)
#     header_sub = models.CharField(max_length=50, required=True)
#     author = models.CharField(max_length=20, required=True)
#     paragraph1 = models.CharField(max_length=1000, required=True)
#     paragraph2 = models.CharField(max_length=1000)
#     paragraph3 = models.CharField(max_length=1000)
#     paragraph4 = models.CharField(max_length=1000)
#     # this image is for the index.html's rad card background
#     thumbnail_image = models.ImageField(null=True, blank=True)
#     # At least, one image would be
#     image1 = models.ImageField(null=True, blank=True, required=True)
#     image2 = models.ImageField(null=True, blank=True)
#     image3 = models.ImageField(null=True, blank=True)
#     image4 = models.ImageField(null=True, blank=True)
#     # To create logs
#     time_stamp = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.name


# class news_content(models.Model):

#     """
#     For news for every pages.
#     """

#     news_genres = models.select()
#     news_header = models.CharField(max_length=20, required=True)
#     news_header_sub = models.CharField(max_length=50, required=True)
#     news_content = models.CharField(max_length=50, required=True)
#     news_image1 = models.ImageField(null=True, blank=True)
#     news_image2 = models.ImageField(null=True, blank=True)
#     news_image3 = models.ImageField(null=True, blank=True)
#     news_date = models.models.DateField(
#         (""), auto_now=True, auto_now_add=False)
#     news_paragraph1 = models.TextField(max_length=1000)
#     news_paragraph2 = models.TextField(max_length=1000)

#     def __str__(self):
#         return self.name


# class sorts_for_cases():
#     """
#     allowing user to
#     """

#     year_sort = ['all', '2024', '2023', '2022']
