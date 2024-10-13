import { Component } from '@angular/core';
import { AnnotationType, Colors, ConnectorAnnotationConfig, ConnectorPlacementType, ConnectorShapeType, Enabled, GroupByType, HighlightPathAnnotationConfig, LabelAnnotationConfig, LineType, OrgItemConfig, PageFitMode } from 'ngx-basic-primitives';

@Component({
  selector: 'app-highlight-path',
  templateUrl: './highlight-path.component.html',
  styleUrls: ['../sample.css','./highlight-path.component.scss']
})
export class HighlightPathComponent {
  PageFitMode = PageFitMode;
  Enabled = Enabled;
  LineType = LineType;
  GroupByType = GroupByType;
  
  items1 = [
    new OrgItemConfig({ id: 0, parent: null, title: "Operation 1", description: "3 Plans", image: "./assets/images/o.png" }),
    new OrgItemConfig({ id: 1, parent: 0, title: "Plan 1", description: "3 Steps", image: "./assets/images/p.png" }),
    new OrgItemConfig({ id: 2, parent: 0, title: "Plan 2", description: "2 Steps", image: "./assets/images/p.png" }),
    new OrgItemConfig({ id: 3, parent: 0, title: "Plan 3", description: "1 Step", image: "./assets/images/p.png" }),
    new OrgItemConfig({ id: 4, parent: 3, title: "Step 1", description: "Complated", image: "./assets/images/s.png" }),
    new OrgItemConfig({ id: 5, parent: 4, title: "Step 2", description: "Complated", image: "./assets/images/s.png" }),
    new OrgItemConfig({ id: 6, parent: 5, title: "Step 3", description: "Complated", image: "./assets/images/s.png" }),
    new OrgItemConfig({ id: 7, parent: 2, title: "Step 1", description: "Field Engineer", image: "./assets/images/s.png" }),
    new OrgItemConfig({ id: 8, parent: 7, title: "Step 2", description: "Field Engineer", image: "./assets/images/s.png" }),
    new OrgItemConfig({ id: 9, parent: 1, title: "Step 1", description: "Field Engineer", image: "./assets/images/s.png" }),
    new OrgItemConfig({ id: 10, parent: 9, title: "Step 2", description: "Field Engineer", image: "./assets/images/s.png" }),
    new OrgItemConfig({ id: 11, parent: 10, title: "Step 3", description: "Field Engineer", image: "./assets/images/s.png" }),
  ];

  annotations = [
    new HighlightPathAnnotationConfig({
      annotationType: AnnotationType.HighlightPath,
      items: [],//[5, 0],
      color: Colors.Navy,
      lineWidth: 12,
      opacity: 0.3,
      showArrows: false
    }),
    new HighlightPathAnnotationConfig({
      annotationType: AnnotationType.Background,
      items: [8,6],//[4, 0],
      color: Colors.Red,
      lineWidth: 2,
      opacity: 1,
      showArrows: true
    }),
    new ConnectorAnnotationConfig({
      annotationType: AnnotationType.Connector,
      lineType:LineType.Dashed,
      connectorPlacementType:ConnectorPlacementType.Offbeat,
      label:'Waiting for',
      fromItem:6,
      toItem:8,
      color: Colors.Red,
      lineWidth: 3,
    })
  ];



  items = [
    new OrgItemConfig({
      id: 0,
      parent: null,
      title: "Operation 1",
      description: "VP, Public Sector",
      image: "./assets/images/o.png",
      context: { phone: "(123) 456-78-90", email: "itema@org.com", icon: "home", color: "primary" },
      templateName: "contactTemplate",
      itemTitleColor: "red"
    }),
    new OrgItemConfig({
      id: 1,
      parent: 0,
      title: "Plan 1",
      description: "VP, Human Resources",
      context: { phone: "(123) 456-78-90", email: "itema@org.com", icon: "home", color: "warn" },
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 2,
      parent: 0,
      title: "Plan 2",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent" },
      description: "Business Solutions, US",
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 3,
      parent: 0,
      title: "Plan 3",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent" },
      description: "Business Solutions, US",
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 4,
      parent: 0,
      title: "Plan 4",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent" },
      description: "Business Solutions, US",
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 5,
      parent: 1,
      title: "Step 1",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent",status:'completed' },
      description: "Business Solutions, US",
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 6,
      parent: 5,
      title: "Step 2",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent",status:'pending' },
      description: "Business Solutions, US",
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 7,
      parent: 6,
      title: "Step 3",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent",status:'completed' },
      description: "Business Solutions, US",
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 8,
      parent: 4,
      title: "Step 1",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent",status:'pending' },
      description: "Business Solutions, US",
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    }),
    new OrgItemConfig({
      id: 9,
      parent: 2,
      title: "Step 1",
      context: { phone: "(123) 654-78-90", email: "itemc@org.com", icon: "home", color: "accent",status:'pending' },
      description: "Business Solutions, US",
      image: "./assets/images/p.png",
      templateName: "contactTemplate"
    })
  ];

  onClick(event: Event, itemConfig: OrgItemConfig) {
    event.stopPropagation();
    alert(`User clicked on cursor button for node ${itemConfig.title}`)
  }
}
