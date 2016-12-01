import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {IProduct} from "./product";

@Injectable()
export class ProductService {
    _productsUrl: string = 'api/products/products.json';
    _productUrl: string = 'api/products/products.json';

    constructor(private _http: Http){
      console.log("creating crud");
    }

    public getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    public getProduct(id: number): Observable<IProduct> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json()
                .find((product: IProduct) => (product.productId === id)))
            .do(data => console.log('Single Product: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error('The following error occurred: ' + error.statusText);
        return Observable.throw(error.json().error || 'Server error');
    }
}
