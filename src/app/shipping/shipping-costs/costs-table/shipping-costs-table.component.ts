import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ShippingCost } from '../../models/ShippingCost';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shipping-costs-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIcon, MatPaginatorModule],
  templateUrl: './shipping-costs-table.component.html',
  styleUrls: ['./shipping-costs-table.component.scss'],
})
export class ShippingCostsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'value', 'type', 'actions'];

  dataSource = new MatTableDataSource<ShippingCost>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  addCost() {}

  editCost(row: ShippingCost) {}

  deleteCost(row: ShippingCost) {}
}
