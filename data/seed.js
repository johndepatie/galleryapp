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
                'imgsrc': 'https://dummyimage.com/1000x1000&text=image+1',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'test', 'a', 'b', 'c']
            },
            {
                'name': 'Image two',
                'imgsrc': 'https://dummyimage.com/1000x1000&text=image+2',
                'desc': 'Description of an image',
                'tags': ['two', 'three', 'test', 'a', 'c']
            },
            {
                'name': 'Image three',
                'imgsrc': 'https://dummyimage.com/1000x1000&text=image+3',
                'desc': 'Description of an image',
                'tags': ['three', 'test', 'a', 'b']
            },
            {
                'name': 'Image four',
                'imgsrc': 'https://dummyimage.com/1000x1000/999/000&text=image+4',
                'desc': 'Description of an image',
                'tags': ['test']
            },
            {
                'name': 'Image five',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+5',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image six',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+6',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image seven',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+7',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image eight',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+8',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image nine',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+9',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image ten',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+10',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image eleven',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+11',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image twelve',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+12',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image thirteen',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+13',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image fourteen',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+14',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image fifteen',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+15',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image sixteen',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+16',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image seventeen',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+17',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image eighteen',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+18',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image nineteen',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+19',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image twenty',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+20',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image twenty-one',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+21',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            },
            {
                'name': 'Image twenty-two',
                'imgsrc': 'https://dummyimage.com/1000x1000/6CBBA2/000&text=image+22',
                'desc': 'Description of an image',
                'tags': ['one', 'two', 'three', 'a', 'b', 'c']
            }
        ]
    }
];