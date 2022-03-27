import pages from './collections/pages'
import globals from './collections/globals'

export default {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  local_backend: true,
  load_config_file: false,
  media_folder: '/public/images',
  public_folder: '/images',
  use_large_media_transforms_in_media_library: false,

  collections: [pages, globals],
}
