# Generated by Django 4.0.6 on 2022-09-02 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0008_article'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='event',
            field=models.BooleanField(default=False),
        ),
        migrations.DeleteModel(
            name='Article',
        ),
    ]
