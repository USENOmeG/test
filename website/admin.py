from django.contrib import admin
from .models import *

"""
Add registers to be able to edit contents from admin page.
"""


class RadContentAdmin(admin.ModelAdmin):
    # Define the ordering to display the latest content first
    ordering = ['-time_stamp']  # '-' indicates descending order


admin.site.register(CustomUser)
admin.site.register(rad_content, RadContentAdmin)
