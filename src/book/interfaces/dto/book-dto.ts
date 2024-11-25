export interface CreateBookDto {
  title: string;
  description?: string;
  authors?: string;
  favorite?: boolean;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}

export type UpdateBookDto = Partial<CreateBookDto>;
