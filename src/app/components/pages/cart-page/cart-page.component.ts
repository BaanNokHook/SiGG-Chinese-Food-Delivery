import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';


@component({  
  selector: 'app-cart-page',   
  templateUrl: './cart-page.component.html',  
  styleUrls: ['./cart-page.components.css']   
}) 
export class CartPageComponenr implements OnInit {
      cart!: Cart;  
      constructor(private cartService: CartService) {
            this.cartService.getCartObservable().subscribe((cart) => {  
                  this.cart = cart;   
            })
      }  

      ngOnInit(): void {
      } 

      removeFromCart(cartItem:CartItem){
            this.cartService.removeFromCart(cartItem.food.id);    
      }  

      changeQuantity(cartItem:CartItem,quantityInString:String){ 
            const quantity = parseInt(quantityInString);  
            this.cartService.changeQuantity(cartItem.food.id, quantity);  
      }
}

