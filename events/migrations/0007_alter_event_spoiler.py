# Generated by Django 4.0.6 on 2022-07-26 05:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_event_image_cover'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='spoiler',
            field=models.CharField(max_length=500),
        ),
    ]