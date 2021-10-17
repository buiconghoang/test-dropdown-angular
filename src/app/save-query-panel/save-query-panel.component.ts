import { Component, Input } from "@angular/core";

export interface QueryInfo {
  name: string
  content: string
}

@Component({
  selector: "save-query-panel",
  templateUrl: "./save-query-panel.component.html",
  styleUrls: ["./save-query-panel.component.css"]
})
export class SaveQueryPanelComponent {
  @Input() queryList:QueryInfo[] = []

  clickMenu(event: any) {
    console.log(event)
  }
}
