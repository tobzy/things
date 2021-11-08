import React, { createContext, useEffect, useState, useRef } from 'react';
import {Thing}  from '../lib/constants'

type ThingsContextProps = {
  things: Thing[];
  toggleSelections: (thing:Thing) => void;
  addNewThing: (text:string) => void;
  deleteThing: (thing:Thing) => void;
};

const ThingsContext = createContext<ThingsContextProps>({} as ThingsContextProps);
ThingsContext.displayName = `ThingsContext`;

export const ThingsProvider = (props: any) => {
  const [things, setThings] = useState<Thing[]>([]);
  const thingComponentRefs = useRef(new Map());

  useEffect(() => {
    setThings([
      {id: 1, description: "Thing 1", selected:false},
      {id: 2, description: "Thing 2",selected:false},
      {id: 3, description: "Thing 3",selected:false},
      {id: 4, description: "Thing 4",selected:false},
      {id: 5, description: "Thing 5",selected:false},
      {id: 6, description: "Thing 6",selected:false},
      {id: 7, description: "Thing 7",selected:false},
    ])
  }, []);

  const toggleSelections = (selectedThing: Thing) => {
    const updatedThings = things.map(thing => {
      return {
        ...thing,
        selected: thing.id === selectedThing.id? !thing.selected : thing.selected
      }
    })

    setThings(updatedThings)
  }

  const addNewThing = (text: string) => {
    const newThing = {
      id: Date.now(),
      description: text,
      selected:false
    }

    setThings([...things, newThing ]);
  }

  const deleteThing = (thingToDelete: Thing) => {
    const updatedThings =  things.filter(thing => thing.id !== thingToDelete.id)
    setThings([...updatedThings ]);
  }

  const providerValues: ThingsContextProps = {
    things,
    toggleSelections,
    addNewThing,
    deleteThing
  };

  return <ThingsContext.Provider value={providerValues} {...props} />;
};

export function useThings() {
  const context = React.useContext(ThingsContext);
  if (context === undefined || Object.keys(context).length === 0) {
    console.log(`${useThings.name} must be used within a ${ThingsProvider.name}`);
  }
  return context;
}
