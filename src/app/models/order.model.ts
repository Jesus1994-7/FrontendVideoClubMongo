export interface Order {
    _id?: string;
    userId : string;
    movieId : string;
    deliveryDate : Date;
    returnDate : Date
}
