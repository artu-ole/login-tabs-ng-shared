"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(modal, vcRef, activeRoute, routerExtension) {
        this.modal = modal;
        this.vcRef = vcRef;
        this.activeRoute = activeRoute;
        this.routerExtension = routerExtension;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.backActivatedRoute = function () {
        this.routerExtension.back({ relativeTo: this.activeRoute });
    };
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "about-page",
            templateUrl: "./about.component.html"
        }),
        __metadata("design:paramtypes", [dialogs_1.ModalDialogService,
            core_1.ViewContainerRef,
            router_2.ActivatedRoute,
            router_1.RouterExtensions])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTREO0FBQzVELG1FQUFpRztBQUNqRyxzREFBK0Q7QUFDL0QsMENBQWlEO0FBT2pEO0lBQ0ksd0JBQ1ksS0FBeUIsRUFDekIsS0FBdUIsRUFDdkIsV0FBMkIsRUFDM0IsZUFBaUM7UUFIakMsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtJQUFJLENBQUM7SUFFbEQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwyQ0FBa0IsR0FBbEI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBWlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FHcUIsNEJBQWtCO1lBQ2xCLHVCQUFnQjtZQUNWLHVCQUFjO1lBQ1YseUJBQWdCO09BTHBDLGNBQWMsQ0FhMUI7SUFBRCxxQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcImFib3V0LXBhZ2VcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2Fib3V0LmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgYWN0aXZlUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbjogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBiYWNrQWN0aXZhdGVkUm91dGUoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9uLmJhY2soeyByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2ZVJvdXRlIH0pO1xuICAgIH1cbn1cbiJdfQ==