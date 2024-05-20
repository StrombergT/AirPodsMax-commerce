# Code review

I'll just throw some extra comments in a separate file instead. Here are some extra tips to consider

- Think about where things are defined and how they interact with each other (imports/exports). It might be useful to think about a component as a module, where all related functionality specific for that component is defined in the same directory - perhaps in separate files if necessary.
- Try to split business logic and presentational/rendering logic into separate components, see the Container/Component pattern.
- Document components using JSDoc (I can show you)
- One component at most in one file

I don't think I have any remarks about any of the implementations. I think you have been thoughtful and consistent across the code base :) As described above, logical grouping is important, especially when the code base gets bigger and the complexity is higher.
