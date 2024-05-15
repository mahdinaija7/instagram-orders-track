# Generated by Django 5.0.2 on 2024-05-04 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("orders", "0005_order_price"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="order",
            name="product_name",
        ),
        migrations.RemoveField(
            model_name="order",
            name="product_url",
        ),
        migrations.AddField(
            model_name="order",
            name="product_names",
            field=models.TextField(default="test"),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="order",
            name="product_urls",
            field=models.TextField(default="test_url"),
            preserve_default=False,
        ),
    ]
