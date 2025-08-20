from django.db import models

class UserRegistration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    age = models.PositiveIntegerField(null=True,blank=True)

    def __str__(self):
        return(self.name)




# Create your models here.
