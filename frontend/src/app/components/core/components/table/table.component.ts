import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'core-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  /* 
      ------------------------------
      Header/Columns Formatting Data
      ------------------------------
      headers = [ heading1, heading2, heading3 ];
        columns = [
          { id: 1, name: 'rehan1', age: 27 },
          { id: 2, name: 'rehan2', age: 27 },
          { id: 3, name: 'rehan3', age: 27 },
      ]
  */
  @Input() title: string = '';
  currentPage = 1;
  itemsPerPage = 10;
  @Input() headers: any[] = [];
  @Input() rows: any[] = [];
  @Input() filters: any[] = [];
  BACKUP: any[] = [];
  constructor() { }
  ngOnInit(): void {
    this.BACKUP = JSON.parse(JSON.stringify(this.rows));
  }
  filter(keyword: string) {
    if (keyword.length > 0) {
      this.rows = this.BACKUP.filter(x => {
        let flag = false;
        this.headers.forEach((header) => {
          const value = x[header];
          if (value && value.toString().toLowerCase().includes(keyword.toLowerCase())) {
            flag = true;
          }
        });
        return flag;
      })
    }
    else this.rows = JSON.parse(JSON.stringify(this.BACKUP));
  }
  filterWithOption(keyword: string, option) {
    if (keyword.length > 0) {
      this.rows = this.BACKUP.filter(x => {
        let flag = false;
          const value = x[option];
          if (value && value.toString().toLowerCase().includes(keyword.toLowerCase())) {
            flag = true;
          }
        return flag;
      })
    }
    else this.rows = JSON.parse(JSON.stringify(this.BACKUP));
  }
  onFilterOptionClick(option) {
    const span = document.getElementById(option);
    const that = this;
    span.addEventListener("click", function () {
      const input = document.createElement("input");
      input.classList.add('form-control');
      input.value = (span.innerText !== option) ? span.innerText : '';
      const closeButton = document.createElement("button");
      closeButton.classList.add('btn');
      closeButton.classList.add('btn-sm');
      closeButton.classList.add('btn-primary');
      closeButton.classList.add('ms-1');
      closeButton.innerText = "x";
      span.replaceWith(input, closeButton);
      closeButton.addEventListener("click", function () {
        if (input.value !== "") {
          span.classList.add('tag');
          span.innerText = input.value;
        } else {
          span.classList.remove('tag');
          span.innerText = option;
        }
        input.replaceWith(span);
        closeButton.remove();
      });
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          closeButton.click();
          if (input.value.trim().length > 0 && input.value !== option) that.filterWithOption(input.value, option);
          else that.filterWithOption('', option);
        }
      });
      input.focus();
    });
  }
  totalPageNumbers() {
    let pageNumbers = [];
    const num = this.rows.length / this.itemsPerPage;
    for (let i = 1; i <= num; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }
  getPagedRows() {
    return this.rows.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
  }
  getRowStatus(id) {
    const row = this.rows.filter(x => x.id === id);
    if (row.length > 0) {
      const statusHeader = this.headers.filter(x => (x as string).toLowerCase().includes('status'));
      if (statusHeader.length > 0) {
        const status = row[0][statusHeader[0]];
        if (status) return status;
        else return 'x';
      }
      else return 'x';
    } else return 'x'
  }
  filterDataByDate(fromDate, toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    return this.rows.filter((item) => {
      const date = new Date(item['created_at']);
      return date >= from && date <= to;
    });
  }
  printTable() {
    const popupWin = window.open('', '_blank', 'width=800,height=600');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>${this.title}</title>
          <style>
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              text-align: left;
              padding: 8px;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h1>${this.title} Report</h1>
          <table>
            <thead
              ${this.getHeaders()}
            </thead>
            <tbody>
             ${this.getRows()}
            </tbody>
          </table>
        </body>
      </html>
    `);
    popupWin.document.close();
    popupWin.print();
  }
  getHeaders() {
    let headers = `<tr><th>#</th>`;
    for (let i = 0; i < this.headers.length; i++) {
      const element = this.headers[i];
      headers += `<th>${element}</th>`;
    }
    headers += `<tr />`;
    return headers;
  }
  getRows() {
    let rows = ``;
    for (let i = 0; i < this.rows.length; i++) {
      rows += `<tr><td>#</td>`;
      const row = this.rows[i];
      for (let j = 0; j < this.headers.length; j++) {
        const head = this.headers[j];
        rows += `<td>${row[head]}</td>`;
      }
      rows += `<tr />`;
    }
    return rows;
  }
}