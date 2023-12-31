from django.contrib import admin
from .models import User, Topic

class UserInline(admin.TabularInline):
    model = Topic.interested_users.through

class UserAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email", "profilepic")
    inlines = [
        UserInline,
    ]

class TopicAdmin(admin.ModelAdmin):
    list_display = ("id", "topic")
    inlines = [
        UserInline,
    ]
    exclude = ('interested_users',)

admin.site.register(User, UserAdmin)
admin.site.register(Topic, TopicAdmin)