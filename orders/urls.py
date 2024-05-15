from django.urls import path
from .views import orders_list,order_detail,clients_list
urlpatterns = [
    path("orders/", orders_list),
    path("orders/<int:id>", order_detail),
    path("clients/",clients_list),

]
