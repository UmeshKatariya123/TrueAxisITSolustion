# Images Folder

This folder is for storing image assets used in the application.

## Logo Images

To add your logo images to the database:

1. **Place your logo images here:**
   - `logo-light.png` - Logo for light backgrounds (navbar)
   - `logo-dark.png` - Logo for dark backgrounds (footer)

2. **Supported formats:**
   - PNG (recommended with transparency)
   - SVG
   - JPG/JPEG

3. **Recommended dimensions:**
   - Minimum: 200x200px
   - Recommended: 400x400px or higher for better quality
   - Square aspect ratio works best

4. **Add logos to database:**
   ```bash
   cd backend
   node seed-logo.js
   ```

   This will:
   - Read the logo images from this folder
   - Convert them to base64
   - Store them in the MongoDB database

5. **Alternative: Upload via API**
   - Use the admin panel or API to upload logos
   - POST `/api/logo` (requires admin authentication)

## Other Images

You can also store other images here for use in:
- Content items (blog posts, work projects, etc.)
- Hero sections
- Service cards
- Testimonials

Access images in your components:
```javascript
import logoImage from '../assets/images/logo.png';
```

