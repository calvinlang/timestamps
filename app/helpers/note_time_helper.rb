def note_time_converter(time)
	seconds = time[-2..-1].to_i
	minutes_in_seconds = time[0..-4].to_i * 60
	return seconds + minutes_in_seconds
end