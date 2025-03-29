import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../Modal/user';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  productsData: IProduct[] = [];
  sortType = 'asc';
  ngOnInit(): void {
    this.tableData();
  }
  constructor(private userServ: UserService) {}
  tableData() {
    this.userServ.getProductsData().subscribe((res: any) => {
      // this.productsData = res.products.slice(0, 10);
      this.productsData = res.products.slice(0, 10);

      // console.log(res, 'products-------------');
    });
  }
  sorting() {
    if (this.sortType == 'asc') {
      this.productsData.sort((a, b) => a.price - b.price);
      this.sortType = 'des';
    } else if (this.sortType == 'des') {
      this.productsData.sort((a, b) => b.price - a.price);
      this.sortType = 'allData';
    } else if (this.sortType == 'allData') {
      this.productsData.sort((a, b) => a.id - a.id);
      this.sortType = 'asc';
    }
  }
}
