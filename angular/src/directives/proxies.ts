/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone, Output } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ionic/core';

import type { IonAccordionGroupCustomEvent, IonBackdropCustomEvent, IonBreadcrumbCustomEvent, IonBreadcrumbsCustomEvent, IonButtonCustomEvent, IonCheckboxCustomEvent, IonContentCustomEvent, IonDatetimeCustomEvent, IonFabButtonCustomEvent, IonImgCustomEvent, IonInfiniteScrollCustomEvent, IonInputCustomEvent, IonItemOptionsCustomEvent, IonItemSlidingCustomEvent, IonMenuCustomEvent, IonNavCustomEvent, IonRadioCustomEvent, IonRadioGroupCustomEvent, IonRangeCustomEvent, IonRefresherCustomEvent, IonReorderGroupCustomEvent, IonSearchbarCustomEvent, IonSegmentCustomEvent, IonSelectCustomEvent, IonSlidesCustomEvent, IonSplitPaneCustomEvent, IonTextareaCustomEvent, IonToggleCustomEvent } from '@ionic/core';




export declare interface IonAccordion extends Components.IonAccordion {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'mode', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
})
@Component({
  selector: 'ion-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'mode', 'readonly', 'toggleIcon', 'toggleIconSlot', 'value']
})
export class IonAccordion {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { AccordionGroupChangeEventDetail as IAccordionGroupAccordionGroupChangeEventDetail } from '@ionic/core';
export declare interface IonAccordionGroup extends Components.IonAccordionGroup {
  /**
   * Emitted when the value property has changed. 
   */
  ionChange: EventEmitter<IonAccordionGroupCustomEvent<IAccordionGroupAccordionGroupChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'disabled', 'expand', 'mode', 'multiple', 'readonly', 'value']
})
@Component({
  selector: 'ion-accordion-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'disabled', 'expand', 'mode', 'multiple', 'readonly', 'value']
})
export class IonAccordionGroup {

  @Output() ionChange = new EventEmitter<IonAccordionGroupCustomEvent<IAccordionGroupAccordionGroupChangeEventDetail>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


export declare interface IonApp extends Components.IonApp {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonApp {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonAvatar extends Components.IonAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonAvatar {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonBackButton extends Components.IonBackButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'defaultHref', 'disabled', 'icon', 'mode', 'routerAnimation', 'text', 'type']
})
@Component({
  selector: 'ion-back-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'defaultHref', 'disabled', 'icon', 'mode', 'routerAnimation', 'text', 'type']
})
export class IonBackButton {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonBackdrop extends Components.IonBackdrop {
  /**
   * Emitted when the backdrop is tapped. 
   */
  ionBackdropTap: EventEmitter<IonBackdropCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['stopPropagation', 'tappable', 'visible']
})
@Component({
  selector: 'ion-backdrop',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['stopPropagation', 'tappable', 'visible']
})
export class IonBackdrop {

  @Output() ionBackdropTap = new EventEmitter<IonBackdropCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionBackdropTap']);
  }
}


export declare interface IonBadge extends Components.IonBadge {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode']
})
export class IonBadge {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonBreadcrumb extends Components.IonBreadcrumb {
  /**
   * Emitted when the breadcrumb has focus. 
   */
  ionFocus: EventEmitter<IonBreadcrumbCustomEvent<void>>;
  /**
   * Emitted when the breadcrumb loses focus. 
   */
  ionBlur: EventEmitter<IonBreadcrumbCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
})
@Component({
  selector: 'ion-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'separator', 'target']
})
export class IonBreadcrumb {

  @Output() ionFocus = new EventEmitter<IonBreadcrumbCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonBreadcrumbCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}

import type { BreadcrumbCollapsedClickEventDetail as IBreadcrumbsBreadcrumbCollapsedClickEventDetail } from '@ionic/core';
export declare interface IonBreadcrumbs extends Components.IonBreadcrumbs {
  /**
   * Emitted when the collapsed indicator is clicked on. 
   */
  ionCollapsedClick: EventEmitter<IonBreadcrumbsCustomEvent<IBreadcrumbsBreadcrumbCollapsedClickEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems', 'mode']
})
@Component({
  selector: 'ion-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'itemsAfterCollapse', 'itemsBeforeCollapse', 'maxItems', 'mode']
})
export class IonBreadcrumbs {

  @Output() ionCollapsedClick = new EventEmitter<IonBreadcrumbsCustomEvent<IBreadcrumbsBreadcrumbCollapsedClickEventDetail>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCollapsedClick']);
  }
}


export declare interface IonButton extends Components.IonButton {
  /**
   * Emitted when the button has focus. 
   */
  ionFocus: EventEmitter<IonButtonCustomEvent<void>>;
  /**
   * Emitted when the button loses focus. 
   */
  ionBlur: EventEmitter<IonButtonCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})
@Component({
  selector: 'ion-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buttonType', 'color', 'disabled', 'download', 'expand', 'fill', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'size', 'strong', 'target', 'type']
})
export class IonButton {

  @Output() ionFocus = new EventEmitter<IonButtonCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonButtonCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonButtons extends Components.IonButtons {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['collapse']
})
@Component({
  selector: 'ion-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapse']
})
export class IonButtons {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCard extends Components.IonCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})
@Component({
  selector: 'ion-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['button', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'target', 'type']
})
export class IonCard {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardContent extends Components.IonCardContent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['mode']
})
@Component({
  selector: 'ion-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['mode']
})
export class IonCardContent {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardHeader extends Components.IonCardHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode', 'translucent']
})
@Component({
  selector: 'ion-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode', 'translucent']
})
export class IonCardHeader {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardSubtitle extends Components.IonCardSubtitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-card-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode']
})
export class IonCardSubtitle {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCardTitle extends Components.IonCardTitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-card-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode']
})
export class IonCardTitle {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { CheckboxChangeEventDetail as ICheckboxCheckboxChangeEventDetail } from '@ionic/core';
export declare interface IonCheckbox extends Components.IonCheckbox {
  /**
   * Emitted when the checked property has changed. 
   */
  ionChange: EventEmitter<IonCheckboxCustomEvent<ICheckboxCheckboxChangeEventDetail>>;
  /**
   * Emitted when the checkbox has focus. 
   */
  ionFocus: EventEmitter<IonCheckboxCustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus. 
   */
  ionBlur: EventEmitter<IonCheckboxCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value']
})
@Component({
  selector: 'ion-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'color', 'disabled', 'indeterminate', 'mode', 'name', 'value']
})
export class IonCheckbox {

  @Output() ionChange = new EventEmitter<IonCheckboxCustomEvent<ICheckboxCheckboxChangeEventDetail>>();
  @Output() ionFocus = new EventEmitter<IonCheckboxCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonCheckboxCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


export declare interface IonChip extends Components.IonChip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'mode', 'outline']
})
@Component({
  selector: 'ion-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'mode', 'outline']
})
export class IonChip {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonCol extends Components.IonCol {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
@Component({
  selector: 'ion-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['offset', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'pull', 'pullLg', 'pullMd', 'pullSm', 'pullXl', 'pullXs', 'push', 'pushLg', 'pushMd', 'pushSm', 'pushXl', 'pushXs', 'size', 'sizeLg', 'sizeMd', 'sizeSm', 'sizeXl', 'sizeXs']
})
export class IonCol {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { ScrollBaseDetail as IContentScrollBaseDetail } from '@ionic/core';
import type { ScrollDetail as IContentScrollDetail } from '@ionic/core';
export declare interface IonContent extends Components.IonContent {
  /**
   * Emitted when the scroll has started. This event is disabled by default.
Set `scrollEvents` to `true` to enable. 
   */
  ionScrollStart: EventEmitter<IonContentCustomEvent<IContentScrollBaseDetail>>;
  /**
   * Emitted while scrolling. This event is disabled by default.
Set `scrollEvents` to `true` to enable. 
   */
  ionScroll: EventEmitter<IonContentCustomEvent<IContentScrollDetail>>;
  /**
   * Emitted when the scroll has ended. This event is disabled by default.
Set `scrollEvents` to `true` to enable. 
   */
  ionScrollEnd: EventEmitter<IonContentCustomEvent<IContentScrollBaseDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY'],
  methods: ['getScrollElement', 'scrollToTop', 'scrollToBottom', 'scrollByPoint', 'scrollToPoint']
})
@Component({
  selector: 'ion-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'forceOverscroll', 'fullscreen', 'scrollEvents', 'scrollX', 'scrollY']
})
export class IonContent {

  @Output() ionScrollStart = new EventEmitter<IonContentCustomEvent<IContentScrollBaseDetail>>();
  @Output() ionScroll = new EventEmitter<IonContentCustomEvent<IContentScrollDetail>>();
  @Output() ionScrollEnd = new EventEmitter<IonContentCustomEvent<IContentScrollBaseDetail>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionScrollStart', 'ionScroll', 'ionScrollEnd']);
  }
}

import type { DatetimeChangeEventDetail as IDatetimeDatetimeChangeEventDetail } from '@ionic/core';
export declare interface IonDatetime extends Components.IonDatetime {
  /**
   * Emitted when the datetime selection was cancelled. 
   */
  ionCancel: EventEmitter<IonDatetimeCustomEvent<void>>;
  /**
   * Emitted when the value (selected date) has changed. 
   */
  ionChange: EventEmitter<IonDatetimeCustomEvent<IDatetimeDatetimeChangeEventDetail>>;
  /**
   * Emitted when the datetime has focus. 
   */
  ionFocus: EventEmitter<IonDatetimeCustomEvent<void>>;
  /**
   * Emitted when the datetime loses focus. 
   */
  ionBlur: EventEmitter<IonDatetimeCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'hourCycle', 'hourValues', 'isDateEnabled', 'locale', 'max', 'min', 'minuteValues', 'mode', 'monthValues', 'multiple', 'name', 'preferWheel', 'presentation', 'readonly', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'value', 'yearValues'],
  methods: ['confirm', 'reset', 'cancel']
})
@Component({
  selector: 'ion-datetime',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'clearText', 'color', 'dayValues', 'disabled', 'doneText', 'firstDayOfWeek', 'hourCycle', 'hourValues', 'isDateEnabled', 'locale', 'max', 'min', 'minuteValues', 'mode', 'monthValues', 'multiple', 'name', 'preferWheel', 'presentation', 'readonly', 'showClearButton', 'showDefaultButtons', 'showDefaultTimeLabel', 'showDefaultTitle', 'size', 'value', 'yearValues']
})
export class IonDatetime {

  @Output() ionCancel = new EventEmitter<IonDatetimeCustomEvent<void>>();
  @Output() ionChange = new EventEmitter<IonDatetimeCustomEvent<IDatetimeDatetimeChangeEventDetail>>();
  @Output() ionFocus = new EventEmitter<IonDatetimeCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonDatetimeCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionCancel', 'ionChange', 'ionFocus', 'ionBlur']);
  }
}


export declare interface IonDatetimeButton extends Components.IonDatetimeButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'datetime', 'disabled', 'mode']
})
@Component({
  selector: 'ion-datetime-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'datetime', 'disabled', 'mode']
})
export class IonDatetimeButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFab extends Components.IonFab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'edge', 'horizontal', 'vertical'],
  methods: ['close']
})
@Component({
  selector: 'ion-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'edge', 'horizontal', 'vertical']
})
export class IonFab {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFabButton extends Components.IonFabButton {
  /**
   * Emitted when the button has focus. 
   */
  ionFocus: EventEmitter<IonFabButtonCustomEvent<void>>;
  /**
   * Emitted when the button loses focus. 
   */
  ionBlur: EventEmitter<IonFabButtonCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
})
@Component({
  selector: 'ion-fab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'closeIcon', 'color', 'disabled', 'download', 'href', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'show', 'size', 'target', 'translucent', 'type']
})
export class IonFabButton {

  @Output() ionFocus = new EventEmitter<IonFabButtonCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonFabButtonCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}


export declare interface IonFabList extends Components.IonFabList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'side']
})
@Component({
  selector: 'ion-fab-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'side']
})
export class IonFabList {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonFooter extends Components.IonFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['collapse', 'mode', 'translucent']
})
@Component({
  selector: 'ion-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapse', 'mode', 'translucent']
})
export class IonFooter {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonGrid extends Components.IonGrid {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['fixed']
})
@Component({
  selector: 'ion-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fixed']
})
export class IonGrid {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonHeader extends Components.IonHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['collapse', 'mode', 'translucent']
})
@Component({
  selector: 'ion-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapse', 'mode', 'translucent']
})
export class IonHeader {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonIcon extends Components.IonIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})
@Component({
  selector: 'ion-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'flipRtl', 'icon', 'ios', 'lazy', 'md', 'mode', 'name', 'sanitize', 'size', 'src']
})
export class IonIcon {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonImg extends Components.IonImg {
  /**
   * Emitted when the img src has been set 
   */
  ionImgWillLoad: EventEmitter<IonImgCustomEvent<void>>;
  /**
   * Emitted when the image has finished loading 
   */
  ionImgDidLoad: EventEmitter<IonImgCustomEvent<void>>;
  /**
   * Emitted when the img fails to load 
   */
  ionError: EventEmitter<IonImgCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alt', 'src']
})
@Component({
  selector: 'ion-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'src']
})
export class IonImg {

  @Output() ionImgWillLoad = new EventEmitter<IonImgCustomEvent<void>>();
  @Output() ionImgDidLoad = new EventEmitter<IonImgCustomEvent<void>>();
  @Output() ionError = new EventEmitter<IonImgCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionImgWillLoad', 'ionImgDidLoad', 'ionError']);
  }
}


export declare interface IonInfiniteScroll extends Components.IonInfiniteScroll {
  /**
   * Emitted when the scroll reaches
the threshold distance. From within your infinite handler,
you must call the infinite scroll's `complete()` method when
your async operation has completed. 
   */
  ionInfinite: EventEmitter<IonInfiniteScrollCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'position', 'threshold'],
  methods: ['complete']
})
@Component({
  selector: 'ion-infinite-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'position', 'threshold']
})
export class IonInfiniteScroll {

  @Output() ionInfinite = new EventEmitter<IonInfiniteScrollCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInfinite']);
  }
}


export declare interface IonInfiniteScrollContent extends Components.IonInfiniteScrollContent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['loadingSpinner', 'loadingText']
})
@Component({
  selector: 'ion-infinite-scroll-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['loadingSpinner', 'loadingText']
})
export class IonInfiniteScrollContent {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { InputChangeEventDetail as IInputInputChangeEventDetail } from '@ionic/core';
export declare interface IonInput extends Components.IonInput {
  /**
   * Emitted when a keyboard input occurred. 
   */
  ionInput: EventEmitter<IonInputCustomEvent<InputEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<IonInputCustomEvent<IInputInputChangeEventDetail>>;
  /**
   * Emitted when the input loses focus. 
   */
  ionBlur: EventEmitter<IonInputCustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus. 
   */
  ionFocus: EventEmitter<IonInputCustomEvent<FocusEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'autocapitalize', 'autocomplete', 'autocorrect', 'autofocus', 'clearInput', 'clearOnEdit', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'max', 'maxlength', 'min', 'minlength', 'mode', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'spellcheck', 'step', 'type', 'value']
})
export class IonInput {

  @Output() ionInput = new EventEmitter<IonInputCustomEvent<InputEvent>>();
  @Output() ionChange = new EventEmitter<IonInputCustomEvent<IInputInputChangeEventDetail>>();
  @Output() ionBlur = new EventEmitter<IonInputCustomEvent<FocusEvent>>();
  @Output() ionFocus = new EventEmitter<IonInputCustomEvent<FocusEvent>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionBlur', 'ionFocus']);
  }
}


export declare interface IonItem extends Components.IonItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['button', 'color', 'counter', 'counterFormatter', 'detail', 'detailIcon', 'disabled', 'download', 'fill', 'href', 'lines', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'target', 'type']
})
@Component({
  selector: 'ion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['button', 'color', 'counter', 'counterFormatter', 'detail', 'detailIcon', 'disabled', 'download', 'fill', 'href', 'lines', 'mode', 'rel', 'routerAnimation', 'routerDirection', 'shape', 'target', 'type']
})
export class IonItem {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemDivider extends Components.IonItemDivider {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode', 'sticky']
})
@Component({
  selector: 'ion-item-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode', 'sticky']
})
export class IonItemDivider {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemGroup extends Components.IonItemGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-item-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonItemGroup {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemOption extends Components.IonItemOption {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']
})
@Component({
  selector: 'ion-item-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'download', 'expandable', 'href', 'mode', 'rel', 'target', 'type']
})
export class IonItemOption {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonItemOptions extends Components.IonItemOptions {
  /**
   * Emitted when the item has been fully swiped. 
   */
  ionSwipe: EventEmitter<IonItemOptionsCustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['side']
})
@Component({
  selector: 'ion-item-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['side']
})
export class IonItemOptions {

  @Output() ionSwipe = new EventEmitter<IonItemOptionsCustomEvent<any>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSwipe']);
  }
}


export declare interface IonItemSliding extends Components.IonItemSliding {
  /**
   * Emitted when the sliding position changes. 
   */
  ionDrag: EventEmitter<IonItemSlidingCustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled'],
  methods: ['getOpenAmount', 'getSlidingRatio', 'open', 'close', 'closeOpened']
})
@Component({
  selector: 'ion-item-sliding',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled']
})
export class IonItemSliding {

  @Output() ionDrag = new EventEmitter<IonItemSlidingCustomEvent<any>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionDrag']);
  }
}


export declare interface IonLabel extends Components.IonLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode', 'position']
})
@Component({
  selector: 'ion-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode', 'position']
})
export class IonLabel {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonList extends Components.IonList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['inset', 'lines', 'mode'],
  methods: ['closeSlidingItems']
})
@Component({
  selector: 'ion-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inset', 'lines', 'mode']
})
export class IonList {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonListHeader extends Components.IonListHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'lines', 'mode']
})
@Component({
  selector: 'ion-list-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'lines', 'mode']
})
export class IonListHeader {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonMenu extends Components.IonMenu {
  /**
   * Emitted when the menu is about to be opened. 
   */
  ionWillOpen: EventEmitter<IonMenuCustomEvent<void>>;
  /**
   * Emitted when the menu is about to be closed. 
   */
  ionWillClose: EventEmitter<IonMenuCustomEvent<void>>;
  /**
   * Emitted when the menu is open. 
   */
  ionDidOpen: EventEmitter<IonMenuCustomEvent<void>>;
  /**
   * Emitted when the menu is closed. 
   */
  ionDidClose: EventEmitter<IonMenuCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type'],
  methods: ['isOpen', 'isActive', 'open', 'close', 'toggle', 'setOpen']
})
@Component({
  selector: 'ion-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['contentId', 'disabled', 'maxEdgeStart', 'menuId', 'side', 'swipeGesture', 'type']
})
export class IonMenu {

  @Output() ionWillOpen = new EventEmitter<IonMenuCustomEvent<void>>();
  @Output() ionWillClose = new EventEmitter<IonMenuCustomEvent<void>>();
  @Output() ionDidOpen = new EventEmitter<IonMenuCustomEvent<void>>();
  @Output() ionDidClose = new EventEmitter<IonMenuCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionWillOpen', 'ionWillClose', 'ionDidOpen', 'ionDidClose']);
  }
}


export declare interface IonMenuButton extends Components.IonMenuButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'mode', 'type']
})
@Component({
  selector: 'ion-menu-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoHide', 'color', 'disabled', 'menu', 'mode', 'type']
})
export class IonMenuButton {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonMenuToggle extends Components.IonMenuToggle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoHide', 'menu']
})
@Component({
  selector: 'ion-menu-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoHide', 'menu']
})
export class IonMenuToggle {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonNav extends Components.IonNav {
  /**
   * Event fired when the nav will change components 
   */
  ionNavWillChange: EventEmitter<IonNavCustomEvent<void>>;
  /**
   * Event fired when the nav has changed components 
   */
  ionNavDidChange: EventEmitter<IonNavCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture'],
  methods: ['push', 'insert', 'insertPages', 'pop', 'popTo', 'popToRoot', 'removeIndex', 'setRoot', 'setPages', 'getActive', 'getByIndex', 'canGoBack', 'getPrevious']
})
@Component({
  selector: 'ion-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'animation', 'root', 'rootParams', 'swipeGesture']
})
export class IonNav {

  @Output() ionNavWillChange = new EventEmitter<IonNavCustomEvent<void>>();
  @Output() ionNavDidChange = new EventEmitter<IonNavCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionNavWillChange', 'ionNavDidChange']);
  }
}


export declare interface IonNavLink extends Components.IonNavLink {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
})
@Component({
  selector: 'ion-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['component', 'componentProps', 'routerAnimation', 'routerDirection']
})
export class IonNavLink {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonNote extends Components.IonNote {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-note',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode']
})
export class IonNote {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonProgressBar extends Components.IonProgressBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value']
})
@Component({
  selector: 'ion-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buffer', 'color', 'mode', 'reversed', 'type', 'value']
})
export class IonProgressBar {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRadio extends Components.IonRadio {
  /**
   * Emitted when the radio button has focus. 
   */
  ionFocus: EventEmitter<IonRadioCustomEvent<void>>;
  /**
   * Emitted when the radio button loses focus. 
   */
  ionBlur: EventEmitter<IonRadioCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'mode', 'name', 'value']
})
@Component({
  selector: 'ion-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'mode', 'name', 'value']
})
export class IonRadio {

  @Output() ionFocus = new EventEmitter<IonRadioCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonRadioCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionFocus', 'ionBlur']);
  }
}

import type { RadioGroupChangeEventDetail as IRadioGroupRadioGroupChangeEventDetail } from '@ionic/core';
export declare interface IonRadioGroup extends Components.IonRadioGroup {
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<IonRadioGroupCustomEvent<IRadioGroupRadioGroupChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowEmptySelection', 'name', 'value']
})
@Component({
  selector: 'ion-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowEmptySelection', 'name', 'value']
})
export class IonRadioGroup {

  @Output() ionChange = new EventEmitter<IonRadioGroupCustomEvent<IRadioGroupRadioGroupChangeEventDetail>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}

import type { RangeChangeEventDetail as IRangeRangeChangeEventDetail } from '@ionic/core';
import type { RangeKnobMoveStartEventDetail as IRangeRangeKnobMoveStartEventDetail } from '@ionic/core';
import type { RangeKnobMoveEndEventDetail as IRangeRangeKnobMoveEndEventDetail } from '@ionic/core';
export declare interface IonRange extends Components.IonRange {
  /**
   * Emitted when the value property has changed. 
   */
  ionChange: EventEmitter<IonRangeCustomEvent<IRangeRangeChangeEventDetail>>;
  /**
   * Emitted when the range has focus. 
   */
  ionFocus: EventEmitter<IonRangeCustomEvent<void>>;
  /**
   * Emitted when the range loses focus. 
   */
  ionBlur: EventEmitter<IonRangeCustomEvent<void>>;
  /**
   * Emitted when the user starts moving the range knob, whether through
mouse drag, touch gesture, or keyboard interaction. 
   */
  ionKnobMoveStart: EventEmitter<IonRangeCustomEvent<IRangeRangeKnobMoveStartEventDetail>>;
  /**
   * Emitted when the user finishes moving the range knob, whether through
mouse drag, touch gesture, or keyboard interaction. 
   */
  ionKnobMoveEnd: EventEmitter<IonRangeCustomEvent<IRangeRangeKnobMoveEndEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activeBarStart', 'color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
})
@Component({
  selector: 'ion-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeBarStart', 'color', 'debounce', 'disabled', 'dualKnobs', 'max', 'min', 'mode', 'name', 'pin', 'pinFormatter', 'snaps', 'step', 'ticks', 'value']
})
export class IonRange {

  @Output() ionChange = new EventEmitter<IonRangeCustomEvent<IRangeRangeChangeEventDetail>>();
  @Output() ionFocus = new EventEmitter<IonRangeCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonRangeCustomEvent<void>>();
  @Output() ionKnobMoveStart = new EventEmitter<IonRangeCustomEvent<IRangeRangeKnobMoveStartEventDetail>>();
  @Output() ionKnobMoveEnd = new EventEmitter<IonRangeCustomEvent<IRangeRangeKnobMoveEndEventDetail>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur', 'ionKnobMoveStart', 'ionKnobMoveEnd']);
  }
}

import type { RefresherEventDetail as IRefresherRefresherEventDetail } from '@ionic/core';
export declare interface IonRefresher extends Components.IonRefresher {
  /**
   * Emitted when the user lets go of the content and has pulled down
further than the `pullMin` or pulls the content down and exceeds the pullMax.
Updates the refresher state to `refreshing`. The `complete()` method should be
called when the async operation has completed. 
   */
  ionRefresh: EventEmitter<IonRefresherCustomEvent<IRefresherRefresherEventDetail>>;
  /**
   * Emitted while the user is pulling down the content and exposing the refresher. 
   */
  ionPull: EventEmitter<IonRefresherCustomEvent<void>>;
  /**
   * Emitted when the user begins to start pulling down. 
   */
  ionStart: EventEmitter<IonRefresherCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration'],
  methods: ['complete', 'cancel', 'getProgress']
})
@Component({
  selector: 'ion-refresher',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeDuration', 'disabled', 'pullFactor', 'pullMax', 'pullMin', 'snapbackDuration']
})
export class IonRefresher {

  @Output() ionRefresh = new EventEmitter<IonRefresherCustomEvent<IRefresherRefresherEventDetail>>();
  @Output() ionPull = new EventEmitter<IonRefresherCustomEvent<void>>();
  @Output() ionStart = new EventEmitter<IonRefresherCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionRefresh', 'ionPull', 'ionStart']);
  }
}


export declare interface IonRefresherContent extends Components.IonRefresherContent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
})
@Component({
  selector: 'ion-refresher-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['pullingIcon', 'pullingText', 'refreshingSpinner', 'refreshingText']
})
export class IonRefresherContent {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonReorder extends Components.IonReorder {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-reorder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonReorder {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { ItemReorderEventDetail as IReorderGroupItemReorderEventDetail } from '@ionic/core';
export declare interface IonReorderGroup extends Components.IonReorderGroup {
  /**
   * Event that needs to be listened to in order to complete the reorder action.
Once the event has been emitted, the `complete()` method then needs
to be called in order to finalize the reorder action. 
   */
  ionItemReorder: EventEmitter<IonReorderGroupCustomEvent<IReorderGroupItemReorderEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled'],
  methods: ['complete']
})
@Component({
  selector: 'ion-reorder-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled']
})
export class IonReorderGroup {

  @Output() ionItemReorder = new EventEmitter<IonReorderGroupCustomEvent<IReorderGroupItemReorderEventDetail>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionItemReorder']);
  }
}


export declare interface IonRippleEffect extends Components.IonRippleEffect {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['type'],
  methods: ['addRipple']
})
@Component({
  selector: 'ion-ripple-effect',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['type']
})
export class IonRippleEffect {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonRow extends Components.IonRow {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonRow {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { SearchbarChangeEventDetail as ISearchbarSearchbarChangeEventDetail } from '@ionic/core';
export declare interface IonSearchbar extends Components.IonSearchbar {
  /**
   * Emitted when a keyboard input occurred. 
   */
  ionInput: EventEmitter<IonSearchbarCustomEvent<KeyboardEvent>>;
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<IonSearchbarCustomEvent<ISearchbarSearchbarChangeEventDetail>>;
  /**
   * Emitted when the cancel button is clicked. 
   */
  ionCancel: EventEmitter<IonSearchbarCustomEvent<void>>;
  /**
   * Emitted when the clear input button is clicked. 
   */
  ionClear: EventEmitter<IonSearchbarCustomEvent<void>>;
  /**
   * Emitted when the input loses focus. 
   */
  ionBlur: EventEmitter<IonSearchbarCustomEvent<void>>;
  /**
   * Emitted when the input has focus. 
   */
  ionFocus: EventEmitter<IonSearchbarCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'mode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-searchbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'autocomplete', 'autocorrect', 'cancelButtonIcon', 'cancelButtonText', 'clearIcon', 'color', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'mode', 'placeholder', 'searchIcon', 'showCancelButton', 'showClearButton', 'spellcheck', 'type', 'value']
})
export class IonSearchbar {

  @Output() ionInput = new EventEmitter<IonSearchbarCustomEvent<KeyboardEvent>>();
  @Output() ionChange = new EventEmitter<IonSearchbarCustomEvent<ISearchbarSearchbarChangeEventDetail>>();
  @Output() ionCancel = new EventEmitter<IonSearchbarCustomEvent<void>>();
  @Output() ionClear = new EventEmitter<IonSearchbarCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonSearchbarCustomEvent<void>>();
  @Output() ionFocus = new EventEmitter<IonSearchbarCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionInput', 'ionChange', 'ionCancel', 'ionClear', 'ionBlur', 'ionFocus']);
  }
}

import type { SegmentChangeEventDetail as ISegmentSegmentChangeEventDetail } from '@ionic/core';
export declare interface IonSegment extends Components.IonSegment {
  /**
   * Emitted when the value property has changed and any
dragging pointer has been released from `ion-segment`. 
   */
  ionChange: EventEmitter<IonSegmentCustomEvent<ISegmentSegmentChangeEventDetail>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'mode', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
})
@Component({
  selector: 'ion-segment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'mode', 'scrollable', 'selectOnFocus', 'swipeGesture', 'value']
})
export class IonSegment {

  @Output() ionChange = new EventEmitter<IonSegmentCustomEvent<ISegmentSegmentChangeEventDetail>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange']);
  }
}


export declare interface IonSegmentButton extends Components.IonSegmentButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'layout', 'mode', 'type', 'value']
})
@Component({
  selector: 'ion-segment-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'layout', 'mode', 'type', 'value']
})
export class IonSegmentButton {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { SelectChangeEventDetail as ISelectSelectChangeEventDetail } from '@ionic/core';
export declare interface IonSelect extends Components.IonSelect {
  /**
   * Emitted when the value has changed. 
   */
  ionChange: EventEmitter<IonSelectCustomEvent<ISelectSelectChangeEventDetail>>;
  /**
   * Emitted when the selection is cancelled. 
   */
  ionCancel: EventEmitter<IonSelectCustomEvent<void>>;
  /**
   * Emitted when the overlay is dismissed. 
   */
  ionDismiss: EventEmitter<IonSelectCustomEvent<void>>;
  /**
   * Emitted when the select has focus. 
   */
  ionFocus: EventEmitter<IonSelectCustomEvent<void>>;
  /**
   * Emitted when the select loses focus. 
   */
  ionBlur: EventEmitter<IonSelectCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value'],
  methods: ['open']
})
@Component({
  selector: 'ion-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'compareWith', 'disabled', 'interface', 'interfaceOptions', 'mode', 'multiple', 'name', 'okText', 'placeholder', 'selectedText', 'value']
})
export class IonSelect {

  @Output() ionChange = new EventEmitter<IonSelectCustomEvent<ISelectSelectChangeEventDetail>>();
  @Output() ionCancel = new EventEmitter<IonSelectCustomEvent<void>>();
  @Output() ionDismiss = new EventEmitter<IonSelectCustomEvent<void>>();
  @Output() ionFocus = new EventEmitter<IonSelectCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonSelectCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionCancel', 'ionDismiss', 'ionFocus', 'ionBlur']);
  }
}


export declare interface IonSelectOption extends Components.IonSelectOption {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'ion-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'value']
})
export class IonSelectOption {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSkeletonText extends Components.IonSkeletonText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated']
})
@Component({
  selector: 'ion-skeleton-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated']
})
export class IonSkeletonText {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSlide extends Components.IonSlide {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonSlide {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSlides extends Components.IonSlides {
  /**
   * Emitted after Swiper initialization 
   */
  ionSlidesDidLoad: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the user taps/clicks on the slide's container. 
   */
  ionSlideTap: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the user double taps on the slide's container. 
   */
  ionSlideDoubleTap: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted before the active slide has changed. 
   */
  ionSlideWillChange: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted after the active slide has changed. 
   */
  ionSlideDidChange: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the next slide has started. 
   */
  ionSlideNextStart: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the previous slide has started. 
   */
  ionSlidePrevStart: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the next slide has ended. 
   */
  ionSlideNextEnd: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the previous slide has ended. 
   */
  ionSlidePrevEnd: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the slide transition has started. 
   */
  ionSlideTransitionStart: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the slide transition has ended. 
   */
  ionSlideTransitionEnd: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the slider is actively being moved. 
   */
  ionSlideDrag: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the slider is at its initial position. 
   */
  ionSlideReachStart: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the slider is at the last slide. 
   */
  ionSlideReachEnd: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the user first touches the slider. 
   */
  ionSlideTouchStart: EventEmitter<IonSlidesCustomEvent<void>>;
  /**
   * Emitted when the user releases the touch. 
   */
  ionSlideTouchEnd: EventEmitter<IonSlidesCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['mode', 'options', 'pager', 'scrollbar'],
  methods: ['update', 'updateAutoHeight', 'slideTo', 'slideNext', 'slidePrev', 'getActiveIndex', 'getPreviousIndex', 'length', 'isEnd', 'isBeginning', 'startAutoplay', 'stopAutoplay', 'lockSwipeToNext', 'lockSwipeToPrev', 'lockSwipes', 'getSwiper']
})
@Component({
  selector: 'ion-slides',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['mode', 'options', 'pager', 'scrollbar']
})
export class IonSlides {

  @Output() ionSlidesDidLoad = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideTap = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideDoubleTap = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideWillChange = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideDidChange = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideNextStart = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlidePrevStart = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideNextEnd = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlidePrevEnd = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideTransitionStart = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideTransitionEnd = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideDrag = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideReachStart = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideReachEnd = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideTouchStart = new EventEmitter<IonSlidesCustomEvent<void>>();
  @Output() ionSlideTouchEnd = new EventEmitter<IonSlidesCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSlidesDidLoad', 'ionSlideTap', 'ionSlideDoubleTap', 'ionSlideWillChange', 'ionSlideDidChange', 'ionSlideNextStart', 'ionSlidePrevStart', 'ionSlideNextEnd', 'ionSlidePrevEnd', 'ionSlideTransitionStart', 'ionSlideTransitionEnd', 'ionSlideDrag', 'ionSlideReachStart', 'ionSlideReachEnd', 'ionSlideTouchStart', 'ionSlideTouchEnd']);
  }
}


export declare interface IonSpinner extends Components.IonSpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'duration', 'name', 'paused']
})
@Component({
  selector: 'ion-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'duration', 'name', 'paused']
})
export class IonSpinner {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonSplitPane extends Components.IonSplitPane {
  /**
   * Expression to be called when the split-pane visibility has changed 
   */
  ionSplitPaneVisible: EventEmitter<IonSplitPaneCustomEvent<{ visible: boolean }>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['contentId', 'disabled', 'when']
})
@Component({
  selector: 'ion-split-pane',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['contentId', 'disabled', 'when']
})
export class IonSplitPane {

  @Output() ionSplitPaneVisible = new EventEmitter<IonSplitPaneCustomEvent<{ visible: boolean }>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionSplitPaneVisible']);
  }
}


export declare interface IonTabBar extends Components.IonTabBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode', 'selectedTab', 'translucent']
})
@Component({
  selector: 'ion-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode', 'selectedTab', 'translucent']
})
export class IonTabBar {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTabButton extends Components.IonTabButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target']
})
@Component({
  selector: 'ion-tab-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'download', 'href', 'layout', 'mode', 'rel', 'selected', 'tab', 'target']
})
export class IonTabButton {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonText extends Components.IonText {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode']
})
export class IonText {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { TextareaChangeEventDetail as ITextareaTextareaChangeEventDetail } from '@ionic/core';
export declare interface IonTextarea extends Components.IonTextarea {
  /**
   * Emitted when the input value has changed. 
   */
  ionChange: EventEmitter<IonTextareaCustomEvent<ITextareaTextareaChangeEventDetail>>;
  /**
   * Emitted when a keyboard input occurred. 
   */
  ionInput: EventEmitter<IonTextareaCustomEvent<InputEvent>>;
  /**
   * Emitted when the input loses focus. 
   */
  ionBlur: EventEmitter<IonTextareaCustomEvent<FocusEvent>>;
  /**
   * Emitted when the input has focus. 
   */
  ionFocus: EventEmitter<IonTextareaCustomEvent<FocusEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap'],
  methods: ['setFocus', 'getInputElement']
})
@Component({
  selector: 'ion-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoGrow', 'autocapitalize', 'autofocus', 'clearOnEdit', 'color', 'cols', 'debounce', 'disabled', 'enterkeyhint', 'inputmode', 'maxlength', 'minlength', 'mode', 'name', 'placeholder', 'readonly', 'required', 'rows', 'spellcheck', 'value', 'wrap']
})
export class IonTextarea {

  @Output() ionChange = new EventEmitter<IonTextareaCustomEvent<ITextareaTextareaChangeEventDetail>>();
  @Output() ionInput = new EventEmitter<IonTextareaCustomEvent<InputEvent>>();
  @Output() ionBlur = new EventEmitter<IonTextareaCustomEvent<FocusEvent>>();
  @Output() ionFocus = new EventEmitter<IonTextareaCustomEvent<FocusEvent>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionInput', 'ionBlur', 'ionFocus']);
  }
}


export declare interface IonThumbnail extends Components.IonThumbnail {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ion-thumbnail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class IonThumbnail {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface IonTitle extends Components.IonTitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'size']
})
@Component({
  selector: 'ion-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'size']
})
export class IonTitle {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import type { ToggleChangeEventDetail as IToggleToggleChangeEventDetail } from '@ionic/core';
export declare interface IonToggle extends Components.IonToggle {
  /**
   * Emitted when the value property has changed. 
   */
  ionChange: EventEmitter<IonToggleCustomEvent<IToggleToggleChangeEventDetail>>;
  /**
   * Emitted when the toggle has focus. 
   */
  ionFocus: EventEmitter<IonToggleCustomEvent<void>>;
  /**
   * Emitted when the toggle loses focus. 
   */
  ionBlur: EventEmitter<IonToggleCustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'color', 'disabled', 'enableOnOffLabels', 'mode', 'name', 'value']
})
@Component({
  selector: 'ion-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'color', 'disabled', 'enableOnOffLabels', 'mode', 'name', 'value']
})
export class IonToggle {

  @Output() ionChange = new EventEmitter<IonToggleCustomEvent<IToggleToggleChangeEventDetail>>();
  @Output() ionFocus = new EventEmitter<IonToggleCustomEvent<void>>();
  @Output() ionBlur = new EventEmitter<IonToggleCustomEvent<void>>();


  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['ionChange', 'ionFocus', 'ionBlur']);
  }
}


export declare interface IonToolbar extends Components.IonToolbar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'mode']
})
@Component({
  selector: 'ion-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'mode']
})
export class IonToolbar {

  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
