import {Component, OnInit} from '@angular/core';
import {AdItem} from "../models/ad-item";

@Component({
    selector: 'app-ad-lists',
    templateUrl: './ad-lists.component.html',
    styleUrls: ['./ad-lists.component.css']
})
export class AdListsComponent implements OnInit {

    adverts: AdItem[] = [
        {
            id: "1",
            theme: "Search team",
            owner_id: "11111",
            date: "10/09/2018",
            time: "",
            content: "Я ищу команду для тренировок и участия в турнирах по Футзалу."
        },
        {
            id: "1",
            theme: "Search team",
            owner_id: "11111",
            date: "10/09/2018",
            time: "",
            content: "Я ищу команду для тренировок и участия в турнирах по Футзалу."
        },
        {
            id: "1",
            theme: "Search team",
            owner_id: "11111",
            date: "10/09/2018",
            time: "",
            content: "Я ищу команду для тренировок и участия в турнирах по Футзалу."
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
