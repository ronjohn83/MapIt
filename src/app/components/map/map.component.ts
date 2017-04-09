import { Component } from '@angular/core';
import { Marker } from '../../marker';
// import { AgmCoreModule } from 'angular2-google-maps/core'

@Component({
  selector: 'map',
  templateUrl: './map.component.html'
})
export class MapComponent {
 
   
    zoom: number = 16;

    lat: number = 26.015909;
    lng: number = -80.120628;

    markerName:string;
    markerLat:string;
    markerLng:string;
    markerDraggable:string;

    markers: Marker[] = [
        {
            name: 'The le Tub Saloon',
            lat: 26.0179,
            lng: 80.1174,
            draggable: true
        },
        {
            name: 'GGs Waterfront Bar & Grill',
            lat: 26.0160,
            lng: 80.1174,
            draggable: true
        },
        {
            name: 'Billys Stone Crab Hollywood',
            lat: 26.0145,
            lng: 80.1177,
            draggable: true
        }
    ]

    constructor(){}

    clickedMarker(marker: Marker, index:number){

        console.log('clicked marker: ' +marker.name);
    }

    mapClicked($event: any){
        console.log('test');
        var newMarker = {
            name: 'Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable:true
        }

        this.markers.push(newMarker);
    }

    markerDragEnd(marker: any, $event:any){
        console.log('dragend', marker, $event);

        var mkrUpdate = {
            name: marker.name,
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
            draggable:false
        }

        var newLat = $event.coords.lat;
        var newLong = $event.coords.lng;
    }

    addMarker(){
       
       if (this.markerDraggable == 'yes'){
           var isDraggable = true;

       }
       else{
           var isDraggable = false;
       }

       var newMarker = {
           name: this.markerName,
           lat: parseFloat(this.markerLat),
           lng: parseFloat(this.markerLng),
           draggable: isDraggable
       }
       console.log('test');
       this.markers.push(newMarker);
    }
}
