import { z } from 'zod';


const photoGalleryValidationSchema = z.object({
    body: z.object({
        name: z.string({ required_error: 'Image name is required' }),
        folder_name: z.string({ required_error: 'Folder name is required' }),
        image: z
            .string({ required_error: 'Gallery image is required' })
            .refine((val) => /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(val.toLowerCase()), {
                message: 'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
            }),
    })
});
const updatePhotoGalleryValidationSchema = z.object({
    body: z.object({
        name: z.string({ required_error: 'Image name is required' }).optional(),
        folder_name: z.string({ required_error: 'Folder name is required' }).optional(),
        image: z
            .string({ required_error: 'Gallery image is required' })
            .refine((val) => /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/.test(val.toLowerCase()), {
                message: 'Invalid image format. Only .jpg, .jpeg, .png, .gif, .bmp, .svg, .webp are allowed',
            }).optional(),
    })
});



export const photoGalleryValidation = {
    photoGalleryValidationSchema,
    updatePhotoGalleryValidationSchema,
};
