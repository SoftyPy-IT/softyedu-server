import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../../../error/AppError';
import sanitizePayload from '../../../../middlewares/updateData';
import QueryBuilder from '../../../../builder/QueryBuilder';
import { SearchableFields } from './events.const';

import { TEvents } from './events.interface';
import Events from './events.model';

const createEventsIntoDB = async (payload: TEvents) => {
  const existingEvent = await Events.findOne({
    title: payload.title,
    date: payload.date,
  });

  if (existingEvent) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'An event with the same title and date already exists.',
    );
  }
  const event = await Events.create(payload);
  return event;
};

const getAllEventsFromDB = async (query: Record<string, unknown>) => {
  const eventsQuery = new QueryBuilder(Events.find(), query)
    .search(SearchableFields)
    .sort()
    .paginate();

  const meta = await eventsQuery.countTotal();
  const data = await eventsQuery.modelQuery;

  return {
    meta,
    data,
  };
};

const updateEventsIntoDB = async (id: string, payload: TEvents) => {
  const sanitizeData = sanitizePayload(payload);

  const updatedEvents = await Events.findByIdAndUpdate(id, sanitizeData, {
    new: true,
    runValidators: true,
  });

  if (!updatedEvents) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Events not found.');
  }

  return updatedEvents;
};

const deleteEventsFromDB = async (id: string) => {
  const deletedEvents = await Events.findByIdAndDelete(id);

  if (!deletedEvents) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Events not found.');
  }

  return deletedEvents;
};

export const EventsServices = {
  createEventsIntoDB,
  getAllEventsFromDB,
  updateEventsIntoDB,
  deleteEventsFromDB,
};
