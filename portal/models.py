from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    profilepic = models.ImageField(upload_to="profilepics", default="profilepics/default.png")
    bio = models.TextField(blank=True)
    pass
    
    def __str__(self):
        return f"{self.username}"
  
    
class Topic(models.Model):
    id = models.AutoField(primary_key=True)
    topic = models.CharField(max_length=64)
    interested_users = models.ManyToManyField(User, blank=True, related_name="interested_topics")
    
    def __str__(self):
        return f"{self.topic}"
