from rest_framework import serializers
from .models import Client,Order


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'
    


class OrderSerializer(serializers.ModelSerializer):
    client = ClientSerializer()

    client_full_name = serializers.CharField(source='client.full_name', read_only=True)
    client_order_city = serializers.CharField(source="client.city",read_only=True)
    client_phone_number = serializers.CharField(source="client.phone_number",read_only=True)
    client_adress = serializers.CharField(source="client.address",read_only=True)
    client_instagram = serializers.CharField(source="client.instagram_profile_id",read_only=True)


    class Meta:
        model = Order
        fields = ['id', 'client', 'client_full_name','client_order_city','client_adress','client_phone_number', 'client_instagram','date', 'product_names', 'status', 'price']


    def update(self,instance,validated_data):
        client_data = validated_data.pop("client")
        print(client_data)
        Client.objects.filter(id=instance.client.id).update(**client_data)
        Order.objects.filter(id=instance.id).update(**validated_data)

        instance.refresh_from_db()
        return instance
    
    def create(self, validated_data):
        client_data = validated_data.pop("client")
        client_name = client_data.get("full_name")
        client_phone_number = client_data.get("phone_number")
        client_exist = Client.objects.filter(full_name=client_name,phone_number=client_phone_number)
        if client_exist:
            order_instance = Order.objects.create(client=client_exist.first(),**validated_data)
        else:
            client_instance = Client.objects.create(**client_data)
            order_instance = Order.objects.create(client=client_instance,**validated_data)
    
        return order_instance
    
        

