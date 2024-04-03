import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {
@Input() appPermission: string[] =[];
private currentRole = 'agent';
  constructor(private tmplRef: TemplateRef<any>,
     private vc: ViewContainerRef) 
     { }

}
