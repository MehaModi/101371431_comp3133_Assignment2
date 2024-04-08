import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [BrowserModule, ApolloModule, HttpClientModule],
    providers: [
      {
        provide: APOLLO_OPTIONS,
        useFactory: (httpLink: HttpLink) => {
          return {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'https://comp3133-assignment1-4a55f5b77abd.herokuapp.com',
            }),
          };
        },
        deps: [HttpLink],
      },
    ],
  })

export class GraphQLModule {}