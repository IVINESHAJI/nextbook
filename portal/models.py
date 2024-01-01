from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    profilepic = models.ImageField(upload_to="profilepics/", default="profilepics/default.png")
    bio = models.TextField(default="No bio yet.", max_length=500, blank=True, null=True)
    interested_topics = models.ManyToManyField("Topic", blank=True, related_name="interested_users")

    def __str__(self) -> str:
        return f"{self.username} ({self.email})"
    
    
class Topic(models.Model):
    id = models.AutoField(primary_key=True)
    topic = models.CharField(max_length=100)
    
    def __str__(self) -> str:
        return f"{self.topic}"
    