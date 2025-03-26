import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../Modal/user.modal';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productsData: IProduct[] = [];
  ngOnInit(): void {
    this.tableData();
  }
  constructor(private userServ: UserService) {}
  tableData() {
    this.userServ.getProductsData().subscribe((res: any) => {
      this.productsData = res.products;
      console.log(res, 'products-------------');
    });
  }
}
