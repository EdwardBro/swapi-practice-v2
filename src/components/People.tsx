import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

interface PeopleData {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
}

export default function People({ data }: { data: PeopleData[] }) {
    return (
        <>
            <h1>People</h1>
            <Grid columns={3}>
                {data.map((people: PeopleData, i: number) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        {people.name}
                                    </Card.Header>
                                    <Card.Description>
                                        <strong>Height</strong>
                                        <p>{people.height}</p>
                                        <strong>Mass</strong>
                                        <p>{people.mass}</p>
                                        <strong>Hair Color</strong>
                                        <p>{people.hair_color}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}
