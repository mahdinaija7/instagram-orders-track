from django.db import models

STATUS_CHOICES = {"PAID":"PAID",
                      "DELIVERED":"DELIVERED",
                      "FULFILED":"FULFILED",
                      "INFULFILED":"INFULFILED",
                      "RETURNED":"RETURNED"
                      }


class Client(models.Model):
    full_name = models.CharField(max_length=20)
    address = models.CharField(max_length=60)
    phone_number = models.CharField(max_length=20)
    city = models.CharField(max_length=20)
    instagram_profile_id = models.CharField(max_length=30)

    def __str__(self):
        return self.full_name
    

class Order(models.Model):
    
    client = models.ForeignKey(Client,on_delete=models.CASCADE)
    date = models.DateField()
    product_names =models.TextField(default="")
    # product_image = models.ImageField(default=None)
    status = models.CharField(max_length=10,choices=STATUS_CHOICES)
    price = models.CharField(max_length=10)
    
    def __str__(self):
        return f"Order for {self.client.full_name} on {self.date}"