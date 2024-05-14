import { SetMetadata } from '@nestjs/common';

export const AdminOnly = () => SetMetadata('is_admin', true);