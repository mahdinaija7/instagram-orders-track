# Generated by Django 5.0.2 on 2024-05-07 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("orders", "0009_alter_client_address_alter_order_price"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="product_names",
            field=models.TextField(default=""),
        ),
    ]