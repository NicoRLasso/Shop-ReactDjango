# Generated by Django 3.1.7 on 2021-05-04 16:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_order_orderitem_shippingaddress'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
