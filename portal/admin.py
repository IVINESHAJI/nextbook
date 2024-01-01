from django.contrib import admin

from .models import User, Topic

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email", "is_staff", "is_superuser", "is_active", "date_joined", "last_login")
    
class TopicAdmin(admin.ModelAdmin):
    list_display = ("id", "topic")

# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Topic, TopicAdmin)