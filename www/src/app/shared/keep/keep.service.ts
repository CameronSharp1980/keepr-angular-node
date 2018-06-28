import { Injectable } from "@angular/core";

@Injectable()
export class keepService {

    getKeeps(): any[] {
        return [
            {
                title: "Title 1",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
                imageUrl: "//placehold.it/100x100",
                tags: "1, 2, 3, 4, 5"
            },
            {
                title: "Title 2",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
                imageUrl: "//placehold.it/200x200",
                tags: "1, 2, 3, 4, 5"
            },
            {
                title: "Title 3",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
                imageUrl: "//placehold.it/300x300",
                tags: "1, 2, 3, 4, 5"
            },
            {
                title: "Title 4",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
                imageUrl: "//placehold.it/400x400",
                tags: "1, 2, 3, 4, 5"
            },
            {
                title: "Title 5",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis dapibus mi nec sagittis. Nulla ullamcorper metus eget placerat luctus. Nullam pulvinar est at est lacinia bibendum. Curabitur feugiat felis.",
                imageUrl: "//placehold.it/500x500",
                tags: "1, 2, 3, 4, 5"
            }
        ]
    }
}