export default function ({ route, store }, next) {

  // fullColumn
  const fullColumnPageNames = ['about', 'project', 'sitemap']
  const fullColumn = fullColumnPageNames.includes(route.name)

  // set fullColumn
  if (!Object.is(store.state.option.fullColumn, fullColumn)) {
    store.commit('option/SET_FULL_COLUMU', fullColumn)
  }

  // next
  next()
}
