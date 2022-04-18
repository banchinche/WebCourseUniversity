
const documentObject = {
    title: undefined,
    body: undefined,
    footer: undefined,
    date: undefined,
    extension: {
        topic: {},
        body: {},
        footer: {},
        date: {},
    },

    show: function() {
        console.log(this)
    },
    update: function(values) {
        const keys = Object.keys(values);
        if (keys.includes('title')) {
            this.title = values['title']
        }
        if (keys.includes('body')) {
            this.body = values['body']
        }
        if (keys.includes('footer')) {
            this.footer = values['footer']
        }
        if (keys.includes('date')) {
            this.date = values['date']
        }
        if (keys.includes('extension')) {
            const extensionKeys = Object.keys(values['extension']);
            if (extensionKeys.includes('topic')) {
                this.extension.topic = values['extension']['topic']
            }
            if (extensionKeys.includes('body')) {
                this.extension.body = values['extension']['body']
            }
            if (extensionKeys.includes('footer')) {
                this.extension.footer = values['extension']['footer']
            }
            if (extensionKeys.includes('date')) {
                this.extension.date = values['extension']['date']
            }
        }
    }
};

documentObject.show();
documentObject.update(
    {
        'title': 'ASD', 
        'body': 'main body', 
        'footer': 'main footer', 
        'date': 'main date',
        'extension': {
            'topic': 'ASD', 
            'body': 'extension body', 
            'footer': 'extension footer', 
            'date': 'extension date', 
        }
    }
);
documentObject.show();
