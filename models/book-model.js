import {model, Schema} from 'mongoose';

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Book must have a title!"]
        },
        author: {
            type: String,
            required: [true, "Book must have a author!"]
        },
        pages: {
            type: Number,
            default: 1,
            min: [1, "Books must have pages!"]
        },
        isAvailable: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

const Book = model("Book", bookSchema);
export default Book;