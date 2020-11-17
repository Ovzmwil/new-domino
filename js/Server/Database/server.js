const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://SuperUser:7ZnnoMa72zZr1EEL@cluster0.arrbl.mongodb.net/Domino?retryWrites=true&w=majority',
                {
                    useNewUrlParser:true, 
                    useUnifiedTopology:true, 
                    useCreateIndex:true, 
                    useFindAndModify: false}
                );
mongoose.Promise = global.Promise;

module.exports = mongoose;
