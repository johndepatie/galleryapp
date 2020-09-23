var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/imageGallery', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './models/imagegallery.js',
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Image'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Image',
        'documents': [
            {
                'name': 'Image one',
                'imgsrc': 'https://picsum.photos/id/10/2500/1667',
                'thumbnail': 'https://picsum.photos/id/10/300/300',
                'desc': 'A forest overlooking a lake',
                'tags': ['forest', 'water']
            },
            {
                'name': 'Image two',
                'imgsrc': 'https://picsum.photos/id/208/2002/1280',
                'thumbnail': 'https://picsum.photos/id/208/300/300',
                'desc': 'A forest through a window',
                'tags': ['forest']
            },
            {
                'name': 'Image three',
                'imgsrc': 'https://picsum.photos/id/201/5184/3456',
                'thumbnail': 'https://picsum.photos/id/201/300/300',
                'desc': 'Macbook on a table',
                'tags': ['tech']
            },
            {
                'name': 'Image four',
                'imgsrc': 'https://picsum.photos/id/20/3670/2462',
                'thumbnail': 'https://picsum.photos/id/20/300/300',
                'desc': 'Study spread',
                'tags': ['tech']
            },
            {
                'name': 'Image five',
                'imgsrc': 'https://picsum.photos/id/2/5616/3744',
                'thumbnail': 'https://picsum.photos/id/2/300/300',
                'desc': 'Open Macbook on coffee table',
                'tags': ['tech']
            },
            {
                'name': 'Image six',
                'imgsrc': 'https://picsum.photos/id/191/2560/1707',
                'thumbnail': 'https://picsum.photos/id/191/300/300',
                'desc': 'Mountainside road',
                'tags': ['forest', 'mountain', 'road']
            },
            {
                'name': 'Image seven',
                'imgsrc': 'https://picsum.photos/id/190/2048/1365',
                'thumbnail': 'https://picsum.photos/id/190/300/300',
                'desc': 'Forest path',
                'tags': ['forest']
            },
            {
                'name': 'Image eight',
                'imgsrc': 'https://picsum.photos/id/17/2500/1667',
                'thumbnail': 'https://picsum.photos/id/17/300/300',
                'desc': 'Path into forest',
                'tags': ['forest']
            },
            {
                'name': 'Image nine',
                'imgsrc': 'https://picsum.photos/id/164/1200/800',
                'thumbnail': 'https://picsum.photos/id/164/300/300',
                'desc': 'Waterways behind buildings',
                'tags': ['water', 'city']
            },
            {
                'name': 'Image ten',
                'imgsrc': 'https://picsum.photos/id/163/2000/1333',
                'thumbnail': 'https://picsum.photos/id/163/300/300',
                'desc': 'Cafe table',
                'tags': ['city']
            },
            {
                'name': 'Image eleven',
                'imgsrc': 'https://picsum.photos/id/16/2500/1667',
                'thumbnail': 'https://picsum.photos/id/16/300/300',
                'desc': 'Rocky beach',
                'tags': ['water']
            },
            {
                'name': 'Image twelve',
                'imgsrc': 'https://picsum.photos/id/15/2500/1667',
                'thumbnail': 'https://picsum.photos/id/15/300/300',
                'desc': 'Riverbed in a mountain forest',
                'tags': ['mountains', 'forest']
            },
            {
                'name': 'Image thirteen',
                'imgsrc': 'https://picsum.photos/id/147/2448/2448',
                'thumbnail': 'https://picsum.photos/id/147/300/300',
                'desc': 'Ocean view',
                'tags': ['water']
            },
            {
                'name': 'Image fourteen',
                'imgsrc': 'https://picsum.photos/id/152/3888/2592',
                'thumbnail': 'https://picsum.photos/id/152/300/300',
                'desc': 'Flower up close',
                'tags': ['flower']
            },
            {
                'name': 'Image fifteen',
                'imgsrc': 'https://picsum.photos/id/134/4928/3264',
                'thumbnail': 'https://picsum.photos/id/134/300/300',
                'desc': 'City bridge',
                'tags': ['city']
            },
            {
                'name': 'Image sixteen',
                'imgsrc': 'https://picsum.photos/id/13/2500/1667',
                'thumbnail': 'https://picsum.photos/id/13/300/300',
                'desc': 'Rocky beach with forest',
                'tags': ['water', 'forest']
            },
            {
                'name': 'Image seventeen',
                'imgsrc': 'https://picsum.photos/id/122/4147/2756',
                'thumbnail': 'https://picsum.photos/id/122/300/300',
                'desc': 'City at night',
                'tags': ['city']
            },
            {
                'name': 'Image eighteen',
                'imgsrc': 'https://picsum.photos/id/12/2500/1667',
                'thumbnail': 'https://picsum.photos/id/12/300/300',
                'desc': 'Sandy beach',
                'tags': ['water']
            },
            {
                'name': 'Image nineteen',
                'imgsrc': 'https://picsum.photos/id/119/3264/2176',
                'thumbnail': 'https://picsum.photos/id/119/300/300',
                'desc': 'Macbook desktop monochrome',
                'tags': ['tech']
            },
            {
                'name': 'Image twenty',
                'imgsrc': 'https://picsum.photos/id/11/2500/1667',
                'thumbnail': 'https://picsum.photos/id/11/300/300',
                'desc': 'River through forested mountains',
                'tags': ['forest', 'mountain']
            },
            {
                'name': 'Image twenty-one',
                'imgsrc': 'https://picsum.photos/id/1084/4579/3271',
                'thumbnail': 'https://picsum.photos/id/1084/300/300',
                'desc': 'Walruses on a beach',
                'tags': ['wildlife']
            },
            {
                'name': 'Image twenty-two',
                'imgsrc': 'https://picsum.photos/id/1075/4858/3239',
                'thumbnail': 'https://picsum.photos/id/1075/300/300',
                'desc': 'Downtown buildings',
                'tags': ['city']
            },
            {
                'name': 'Image twenty-three',
                'imgsrc': 'https://picsum.photos/id/1069/3500/2333',
                'thumbnail': 'https://picsum.photos/id/1069/300/300',
                'desc': 'Jellyfish',
                'tags': ['wildlife']
            },
            {
                'name': 'Image twenty-four',
                'imgsrc': 'https://picsum.photos/id/1067/5760/3840',
                'thumbnail': 'https://picsum.photos/id/1067/300/300',
                'desc': 'City overhead',
                'tags': ['city']
            },
            {
                'name': 'Image twenty-five',
                'imgsrc': 'https://picsum.photos/id/1061/3264/2448',
                'thumbnail': 'https://picsum.photos/id/1061/300/300',
                'desc': 'Beach',
                'tags': ['water']
            },
            {
                'name': 'Image twenty-six',
                'imgsrc': 'https://picsum.photos/id/1057/6016/4016',
                'thumbnail': 'https://picsum.photos/id/1057/300/300',
                'desc': 'Mountain beach',
                'tags': ['mountain','water']
            },
            {
                'name': 'Image twenty-seven',
                'imgsrc': 'https://picsum.photos/id/1048/4858/3239',
                'thumbnail': 'https://picsum.photos/id/1048/300/300',
                'desc': 'Downtown buildings',
                'tags': ['city']
            },
            {
                'name': 'Image twenty-eight',
                'imgsrc': 'https://picsum.photos/id/1045/3936/26249',
                'thumbnail': 'https://picsum.photos/id/1045/300/300',
                'desc': 'Foggy mountains',
                'tags': ['mountain']
            },
            {
                'name': 'Image twenty-nine',
                'imgsrc': 'https://picsum.photos/id/1024/1920/1280',
                'thumbnail': 'https://picsum.photos/id/1024/300/300',
                'desc': 'Vulture',
                'tags': ['wildlife']
            },
            {
                'name': 'Image thirty',
                'imgsrc': 'https://picsum.photos/id/1020/4288/2848',
                'thumbnail': 'https://picsum.photos/id/1020/300/300',
                'desc': 'Bear with cubs',
                'tags': ['wildlife']
            },
            {
                'name': 'Image thirty-one',
                'imgsrc': 'https://picsum.photos/id/1003/1181/1772',
                'thumbnail': 'https://picsum.photos/id/1003/300/300',
                'desc': 'Fawn',
                'tags': ['wildlife']
            },
            {
                'name': 'Image thirty-two',
                'imgsrc': 'https://picsum.photos/id/1026/4621/3070',
                'thumbnail': 'https://picsum.photos/id/1026/300/300',
                'desc': 'Trainyard in the city',
                'tags': ['city']
            },
            {
                'name': 'Image thirty-three',
                'imgsrc': 'https://picsum.photos/id/1029/4887/2759',
                'thumbnail': 'https://picsum.photos/id/1029/300/300',
                'desc': 'Overhead view of Central Park in NYC',
                'tags': ['city']
            },
            {
                'name': 'Image thirty-four',
                'imgsrc': 'https://picsum.photos/id/1033/2048/1365',
                'thumbnail': 'https://picsum.photos/id/1033/300/300',
                'desc': 'Transit station',
                'tags': ['city']
            },
            {
                'name': 'Image thirty-five',
                'imgsrc': 'https://picsum.photos/id/1036/4608/3072',
                'thumbnail': 'https://picsum.photos/id/1036/300/300',
                'desc': 'Snowy mountain camp',
                'tags': ['mountain', 'snow']
            },
            {
                'name': 'Image thirty-six',
                'imgsrc': 'https://picsum.photos/id/1018/3914/2935',
                'thumbnail': 'https://picsum.photos/id/1018/300/300',
                'desc': 'Mountain road',
                'tags': ['mountain', 'road']
            }
        ]
    }
];