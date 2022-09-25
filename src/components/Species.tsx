import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

interface SpeciesData {
    name: string,
    average_height: string,
    skin_colors: string,
    hair_colors: string,
}

export default function Species({ data }: { data: SpeciesData[] }) {
    return (
        <>
            <h1>Species</h1>
            <Grid columns={3}>
                {data.map((species: SpeciesData, i: number) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>
                                        {species.name}
                                    </Card.Header>
                                    <Card.Description>
                                        <strong>Average Height</strong>
                                        <p>{species.average_height}</p>
                                        <strong>Skin Colors</strong>
                                        <p>{species.skin_colors}</p>
                                        <strong>Hair Colors</strong>
                                        <p>{species.hair_colors}</p>
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

